import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAvTimerElement
 * @class IconSharpAvTimerElement
 * @extends {AoflElement}
 */
class IconSharpAvTimerElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAvTimerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-av-timer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAvTimerElement.is, IconSharpAvTimerElement);

export default IconSharpAvTimerElement;
