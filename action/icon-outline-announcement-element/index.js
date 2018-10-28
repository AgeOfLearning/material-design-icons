import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAnnouncementElement
 * @class IconOutlineAnnouncementElement
 * @extends {AoflElement}
 */
class IconOutlineAnnouncementElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAnnouncementElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-announcement';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAnnouncementElement.is, IconOutlineAnnouncementElement);

export default IconOutlineAnnouncementElement;
