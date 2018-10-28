import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTimelineElement
 * @class IconSharpTimelineElement
 * @extends {AoflElement}
 */
class IconSharpTimelineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTimelineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-timeline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTimelineElement.is, IconSharpTimelineElement);

export default IconSharpTimelineElement;
