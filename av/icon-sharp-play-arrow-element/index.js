import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPlayArrowElement
 * @class IconSharpPlayArrowElement
 * @extends {AoflElement}
 */
class IconSharpPlayArrowElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPlayArrowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-play-arrow';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPlayArrowElement.is, IconSharpPlayArrowElement);

export default IconSharpPlayArrowElement;
