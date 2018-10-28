import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNavigateNextElement
 * @class IconOutlineNavigateNextElement
 * @extends {AoflElement}
 */
class IconOutlineNavigateNextElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNavigateNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-navigate-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNavigateNextElement.is, IconOutlineNavigateNextElement);

export default IconOutlineNavigateNextElement;
