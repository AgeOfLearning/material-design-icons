import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsRemoteElement
 * @class IconTwotoneSettingsRemoteElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsRemoteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsRemoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-remote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsRemoteElement.is, IconTwotoneSettingsRemoteElement);

export default IconTwotoneSettingsRemoteElement;
