import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDeveloperModeElement
 * @class IconRoundDeveloperModeElement
 * @extends {AoflElement}
 */
class IconRoundDeveloperModeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDeveloperModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-developer-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDeveloperModeElement.is, IconRoundDeveloperModeElement);

export default IconRoundDeveloperModeElement;
