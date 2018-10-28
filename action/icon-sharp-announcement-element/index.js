import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAnnouncementElement
 * @class IconSharpAnnouncementElement
 * @extends {AoflElement}
 */
class IconSharpAnnouncementElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAnnouncementElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-announcement';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAnnouncementElement.is, IconSharpAnnouncementElement);

export default IconSharpAnnouncementElement;
