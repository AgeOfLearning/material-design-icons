import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSkipPreviousElement
 * @class IconSharpSkipPreviousElement
 * @extends {AoflElement}
 */
class IconSharpSkipPreviousElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSkipPreviousElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-skip-previous';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSkipPreviousElement.is, IconSharpSkipPreviousElement);

export default IconSharpSkipPreviousElement;
