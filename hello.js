var e = new URLSearchParams(location.search),
  e = (location.href, e.get("customerId"));
e && localStorage.setItem("customerId", JSON.stringify(e)),
  (function () {
    let c = !1;
    return function (e) {
      function t() {
        if (!c) return (c = !0), e();
      }
      function o() {
        if (!c) {
          try {
            document.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(o, 1);
          }
          return t();
        }
      }
      if ("complete" === document.readyState) return t();
      if (document.addEventListener)
        document.addEventListener("DOMContentLoaded", t, !1),
          window.addEventListener("load", t, !1);
      else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", t),
          window.attachEvent("onload", t);
        let e = !1;
        try {
          e = null == window.frameElement;
        } catch (e) {}
        if (document.documentElement.doScroll && e) return o();
      }
    };
  })()(function () {
    var e = location.href.includes("thank_you"),
      t = location.href.includes("checkouts"),
      o = JSON.parse(localStorage.getItem("customerId") || null);
    let c = null;
    e && t && (c = Shopify.checkout.token),
      e &&
        c &&
        (window.fbq &&
          fbq(
            "track",
            "Purchase",
            {
              value: Shopify.checkout.total_price,
              currency: Shopify.checkout.currency,
            },
            { eventID: c }
          ),
        (t = {
          storeUrl: Shopify.shop,
          hashedCustomerId: o,
          checkoutToken: c,
          orderDetails: {
            total_price: Shopify.checkout.total_price,
            currency: Shopify.checkout.currency,
            phone: Shopify.checkout.phone,
            email: Shopify.checkout.email,
            created_at: Shopify.checkout.created_at,
            shipping_address: {
              phone: Shopify.checkout.shipping_address.phone,
              country: Shopify.checkout.shipping_address.country_code,
            },
          },
        }),
        fetch(
          "https://bikapi.bikayi.app/dm/ctwaAdsTrackingApiFunctions-saveShopifyCheckoutToken",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(t),
          }
        )
          .then((e) => e.json())
          .then());
  });
