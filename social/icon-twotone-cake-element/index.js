import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCakeElement
 * @class IconTwotoneCakeElement
 * @extends {AoflElement}
 */
class IconTwotoneCakeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCakeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cake';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCakeElement.is, IconTwotoneCakeElement);

export default IconTwotoneCakeElement;
