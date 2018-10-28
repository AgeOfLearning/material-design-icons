import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAddAPhotoElement
 * @class IconBaselineAddAPhotoElement
 * @extends {AoflElement}
 */
class IconBaselineAddAPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAddAPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-add-a-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAddAPhotoElement.is, IconBaselineAddAPhotoElement);

export default IconBaselineAddAPhotoElement;
