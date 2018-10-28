import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundExposurePlus1Element
 * @class IconRoundExposurePlus1Element
 * @extends {AoflElement}
 */
class IconRoundExposurePlus1Element extends AoflElement {
  /**
   * Creates an instance of IconRoundExposurePlus1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-exposure-plus-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundExposurePlus1Element.is, IconRoundExposurePlus1Element);

export default IconRoundExposurePlus1Element;
