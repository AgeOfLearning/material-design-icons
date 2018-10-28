import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAnnouncementElement
 * @class IconTwotoneAnnouncementElement
 * @extends {AoflElement}
 */
class IconTwotoneAnnouncementElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAnnouncementElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-announcement';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAnnouncementElement.is, IconTwotoneAnnouncementElement);

export default IconTwotoneAnnouncementElement;
