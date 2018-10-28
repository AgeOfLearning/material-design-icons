import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNaturePeopleElement
 * @class IconSharpNaturePeopleElement
 * @extends {AoflElement}
 */
class IconSharpNaturePeopleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNaturePeopleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-nature-people';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNaturePeopleElement.is, IconSharpNaturePeopleElement);

export default IconSharpNaturePeopleElement;
