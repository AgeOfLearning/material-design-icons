import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCreateElement
 * @class IconSharpCreateElement
 * @extends {AoflElement}
 */
class IconSharpCreateElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCreateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-create';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCreateElement.is, IconSharpCreateElement);

export default IconSharpCreateElement;
