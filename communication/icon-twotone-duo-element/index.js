import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDuoElement
 * @class IconTwotoneDuoElement
 * @extends {AoflElement}
 */
class IconTwotoneDuoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDuoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-duo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDuoElement.is, IconTwotoneDuoElement);

export default IconTwotoneDuoElement;
