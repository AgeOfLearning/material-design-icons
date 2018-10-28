import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTocElement
 * @class IconTwotoneTocElement
 * @extends {AoflElement}
 */
class IconTwotoneTocElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTocElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-toc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTocElement.is, IconTwotoneTocElement);

export default IconTwotoneTocElement;
