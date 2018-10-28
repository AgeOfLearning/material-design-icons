import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNavigateBeforeElement
 * @class IconTwotoneNavigateBeforeElement
 * @extends {AoflElement}
 */
class IconTwotoneNavigateBeforeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNavigateBeforeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-navigate-before';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNavigateBeforeElement.is, IconTwotoneNavigateBeforeElement);

export default IconTwotoneNavigateBeforeElement;
