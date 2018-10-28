import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSubdirectoryArrowRightElement
 * @class IconTwotoneSubdirectoryArrowRightElement
 * @extends {AoflElement}
 */
class IconTwotoneSubdirectoryArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSubdirectoryArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-subdirectory-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSubdirectoryArrowRightElement.is, IconTwotoneSubdirectoryArrowRightElement);

export default IconTwotoneSubdirectoryArrowRightElement;
