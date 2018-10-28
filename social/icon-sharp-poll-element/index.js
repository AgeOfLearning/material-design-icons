import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPollElement
 * @class IconSharpPollElement
 * @extends {AoflElement}
 */
class IconSharpPollElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-poll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPollElement.is, IconSharpPollElement);

export default IconSharpPollElement;
