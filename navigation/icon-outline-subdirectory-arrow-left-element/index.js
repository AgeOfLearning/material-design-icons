import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSubdirectoryArrowLeftElement
 * @class IconOutlineSubdirectoryArrowLeftElement
 * @extends {AoflElement}
 */
class IconOutlineSubdirectoryArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSubdirectoryArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-subdirectory-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSubdirectoryArrowLeftElement.is, IconOutlineSubdirectoryArrowLeftElement);

export default IconOutlineSubdirectoryArrowLeftElement;
