import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAnnouncementElement
 * @class IconBaselineAnnouncementElement
 * @extends {AoflElement}
 */
class IconBaselineAnnouncementElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAnnouncementElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-announcement';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAnnouncementElement.is, IconBaselineAnnouncementElement);

export default IconBaselineAnnouncementElement;
