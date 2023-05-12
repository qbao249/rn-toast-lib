
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNToastLibSpec.h"

@interface ToastLib : NSObject <NativeToastLibSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ToastLib : NSObject <RCTBridgeModule>
#endif

@end
