import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTitleElement
 * @class IconTwotoneTitleElement
 * @extends {AoflElement}
 */
class IconTwotoneTitleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTitleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-title';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTitleElement.is, IconTwotoneTitleElement);

export default IconTwotoneTitleElement;
