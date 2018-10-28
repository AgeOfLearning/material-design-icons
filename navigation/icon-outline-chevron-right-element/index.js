import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineChevronRightElement
 * @class IconOutlineChevronRightElement
 * @extends {AoflElement}
 */
class IconOutlineChevronRightElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineChevronRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-chevron-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineChevronRightElement.is, IconOutlineChevronRightElement);

export default IconOutlineChevronRightElement;
