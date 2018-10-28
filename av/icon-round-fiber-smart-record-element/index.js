import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFiberSmartRecordElement
 * @class IconRoundFiberSmartRecordElement
 * @extends {AoflElement}
 */
class IconRoundFiberSmartRecordElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFiberSmartRecordElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-fiber-smart-record';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFiberSmartRecordElement.is, IconRoundFiberSmartRecordElement);

export default IconRoundFiberSmartRecordElement;
