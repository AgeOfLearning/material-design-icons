import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLoopElement
 * @class IconSharpLoopElement
 * @extends {AoflElement}
 */
class IconSharpLoopElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLoopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-loop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLoopElement.is, IconSharpLoopElement);

export default IconSharpLoopElement;
