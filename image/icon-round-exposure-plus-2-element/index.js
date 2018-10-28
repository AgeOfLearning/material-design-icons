import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundExposurePlus2Element
 * @class IconRoundExposurePlus2Element
 * @extends {AoflElement}
 */
class IconRoundExposurePlus2Element extends AoflElement {
  /**
   * Creates an instance of IconRoundExposurePlus2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-exposure-plus-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundExposurePlus2Element.is, IconRoundExposurePlus2Element);

export default IconRoundExposurePlus2Element;
