import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRvHookupElement
 * @class IconRoundRvHookupElement
 * @extends {AoflElement}
 */
class IconRoundRvHookupElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRvHookupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-rv-hookup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRvHookupElement.is, IconRoundRvHookupElement);

export default IconRoundRvHookupElement;
