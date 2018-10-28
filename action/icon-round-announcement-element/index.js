import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAnnouncementElement
 * @class IconRoundAnnouncementElement
 * @extends {AoflElement}
 */
class IconRoundAnnouncementElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAnnouncementElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-announcement';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAnnouncementElement.is, IconRoundAnnouncementElement);

export default IconRoundAnnouncementElement;
