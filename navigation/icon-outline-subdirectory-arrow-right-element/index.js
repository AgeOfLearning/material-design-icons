import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSubdirectoryArrowRightElement
 * @class IconOutlineSubdirectoryArrowRightElement
 * @extends {AoflElement}
 */
class IconOutlineSubdirectoryArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSubdirectoryArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-subdirectory-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSubdirectoryArrowRightElement.is, IconOutlineSubdirectoryArrowRightElement);

export default IconOutlineSubdirectoryArrowRightElement;
