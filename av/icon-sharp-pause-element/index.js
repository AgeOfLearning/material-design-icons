import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPauseElement
 * @class IconSharpPauseElement
 * @extends {AoflElement}
 */
class IconSharpPauseElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPauseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-pause';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPauseElement.is, IconSharpPauseElement);

export default IconSharpPauseElement;
