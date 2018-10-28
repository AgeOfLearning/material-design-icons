import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNavigateBeforeElement
 * @class IconOutlineNavigateBeforeElement
 * @extends {AoflElement}
 */
class IconOutlineNavigateBeforeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNavigateBeforeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-navigate-before';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNavigateBeforeElement.is, IconOutlineNavigateBeforeElement);

export default IconOutlineNavigateBeforeElement;
