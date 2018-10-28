import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHeadsetMicElement
 * @class IconBaselineHeadsetMicElement
 * @extends {AoflElement}
 */
class IconBaselineHeadsetMicElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHeadsetMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-headset-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHeadsetMicElement.is, IconBaselineHeadsetMicElement);

export default IconBaselineHeadsetMicElement;
