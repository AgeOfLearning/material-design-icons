import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGrainElement
 * @class IconSharpGrainElement
 * @extends {AoflElement}
 */
class IconSharpGrainElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-grain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGrainElement.is, IconSharpGrainElement);

export default IconSharpGrainElement;
