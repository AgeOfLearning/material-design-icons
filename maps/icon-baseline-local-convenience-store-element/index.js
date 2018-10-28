import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalConvenienceStoreElement
 * @class IconBaselineLocalConvenienceStoreElement
 * @extends {AoflElement}
 */
class IconBaselineLocalConvenienceStoreElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalConvenienceStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-convenience-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalConvenienceStoreElement.is, IconBaselineLocalConvenienceStoreElement);

export default IconBaselineLocalConvenienceStoreElement;
