import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineInsertPhotoElement
 * @class IconBaselineInsertPhotoElement
 * @extends {AoflElement}
 */
class IconBaselineInsertPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineInsertPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-insert-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineInsertPhotoElement.is, IconBaselineInsertPhotoElement);

export default IconBaselineInsertPhotoElement;
