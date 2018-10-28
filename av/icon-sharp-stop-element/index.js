import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStopElement
 * @class IconSharpStopElement
 * @extends {AoflElement}
 */
class IconSharpStopElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-stop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStopElement.is, IconSharpStopElement);

export default IconSharpStopElement;
