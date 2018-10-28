import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPlayForWorkElement
 * @class IconSharpPlayForWorkElement
 * @extends {AoflElement}
 */
class IconSharpPlayForWorkElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPlayForWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-play-for-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPlayForWorkElement.is, IconSharpPlayForWorkElement);

export default IconSharpPlayForWorkElement;
