import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSkipNextElement
 * @class IconSharpSkipNextElement
 * @extends {AoflElement}
 */
class IconSharpSkipNextElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSkipNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-skip-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSkipNextElement.is, IconSharpSkipNextElement);

export default IconSharpSkipNextElement;
