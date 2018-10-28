import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatListBulletedElement
 * @class IconRoundFormatListBulletedElement
 * @extends {AoflElement}
 */
class IconRoundFormatListBulletedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatListBulletedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-list-bulleted';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatListBulletedElement.is, IconRoundFormatListBulletedElement);

export default IconRoundFormatListBulletedElement;
