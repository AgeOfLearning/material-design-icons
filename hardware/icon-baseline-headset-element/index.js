import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHeadsetElement
 * @class IconBaselineHeadsetElement
 * @extends {AoflElement}
 */
class IconBaselineHeadsetElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHeadsetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-headset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHeadsetElement.is, IconBaselineHeadsetElement);

export default IconBaselineHeadsetElement;
