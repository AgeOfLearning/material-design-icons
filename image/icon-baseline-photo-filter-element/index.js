import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhotoFilterElement
 * @class IconBaselinePhotoFilterElement
 * @extends {AoflElement}
 */
class IconBaselinePhotoFilterElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhotoFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-photo-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhotoFilterElement.is, IconBaselinePhotoFilterElement);

export default IconBaselinePhotoFilterElement;
