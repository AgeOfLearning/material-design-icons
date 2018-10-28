import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBeenhereElement
 * @class IconSharpBeenhereElement
 * @extends {AoflElement}
 */
class IconSharpBeenhereElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBeenhereElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-beenhere';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBeenhereElement.is, IconSharpBeenhereElement);

export default IconSharpBeenhereElement;
