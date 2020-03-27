import { shallowMount } from "@vue/test-utils";
import SampleButton from "@/components/SampleButton.vue";

describe("追加するbuttonのidをsampleButtonとする。", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(SampleButton);
  });

  it("存在する。", () => {
    expect(wrapper.find("#sampleButton").exists()).toBeTruthy();
  });

  it("ラベル(サンプルのラベル)が正しい。", () => {
    expect(wrapper.find("#sampleButton").text()).toBe("サンプルのラベル");
  });

  it("buttonにラベルにバインドされた変数が正しい。", () => {
    expect(wrapper.vm.sampleLabel).toBe("サンプルのラベル");
  });

  it("クリックするとonClickが呼び出される。", () => {
    const onClick = jest.fn();
    wrapper.setMethods({ onClick });
    wrapper.find("#sampleButton").trigger("click");
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
