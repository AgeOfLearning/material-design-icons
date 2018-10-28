import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpForward30Element
 * @class IconSharpForward30Element
 * @extends {AoflElement}
 */
class IconSharpForward30Element extends AoflElement {
  /**
   * Creates an instance of IconSharpForward30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-forward-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpForward30Element.is, IconSharpForward30Element);

export default IconSharpForward30Element;
