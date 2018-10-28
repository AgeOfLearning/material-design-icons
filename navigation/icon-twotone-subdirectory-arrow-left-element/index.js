import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSubdirectoryArrowLeftElement
 * @class IconTwotoneSubdirectoryArrowLeftElement
 * @extends {AoflElement}
 */
class IconTwotoneSubdirectoryArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSubdirectoryArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-subdirectory-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSubdirectoryArrowLeftElement.is, IconTwotoneSubdirectoryArrowLeftElement);

export default IconTwotoneSubdirectoryArrowLeftElement;
