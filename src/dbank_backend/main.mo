import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBANK {
  stable var runningTime = Time.now();
  stable var currentValue : Float = 0;

  public func compound() {
    var currentTime = Time.now();
    var elapsedTimeNS = currentTime - runningTime;
    var elapsedTimeS = elapsedTimeNS / 10000000000;

    currentValue := currentValue * (1.005 ** Float.fromInt(elapsedTimeS));
    runningTime := currentTime;
  };

  public func topup(amount : Float) {
    currentValue += amount;
    Debug.print("Current Value: " # debug_show (currentValue));
  };

  public func withDraw(amount : Float) {
    let tempVal : Float = currentValue - amount;
    if (tempVal >= 0) {
      currentValue -= amount;
      Debug.print("Value remaining: " # debug_show (currentValue));
    } else {
      Debug.print("Value vannot be negative: " # debug_show (tempVal));
    };
  };

  public query func checkBalance() : async Float {
    return currentValue;
  };
};
