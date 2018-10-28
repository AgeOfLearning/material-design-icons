import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTimerElement
 * @class IconSharpTimerElement
 * @extends {AoflElement}
 */
class IconSharpTimerElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTimerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-timer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTimerElement.is, IconSharpTimerElement);

export default IconSharpTimerElement;
