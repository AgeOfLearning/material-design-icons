import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCancelElement
 * @class IconTwotoneCancelElement
 * @extends {AoflElement}
 */
class IconTwotoneCancelElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCancelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cancel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCancelElement.is, IconTwotoneCancelElement);

export default IconTwotoneCancelElement;
