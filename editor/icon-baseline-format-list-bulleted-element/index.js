import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatListBulletedElement
 * @class IconBaselineFormatListBulletedElement
 * @extends {AoflElement}
 */
class IconBaselineFormatListBulletedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatListBulletedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-list-bulleted';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatListBulletedElement.is, IconBaselineFormatListBulletedElement);

export default IconBaselineFormatListBulletedElement;
