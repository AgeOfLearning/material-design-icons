import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalConvenienceStoreElement
 * @class IconRoundLocalConvenienceStoreElement
 * @extends {AoflElement}
 */
class IconRoundLocalConvenienceStoreElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalConvenienceStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-convenience-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalConvenienceStoreElement.is, IconRoundLocalConvenienceStoreElement);

export default IconRoundLocalConvenienceStoreElement;
