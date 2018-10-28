import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTrackChangesElement
 * @class IconTwotoneTrackChangesElement
 * @extends {AoflElement}
 */
class IconTwotoneTrackChangesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTrackChangesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-track-changes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTrackChangesElement.is, IconTwotoneTrackChangesElement);

export default IconTwotoneTrackChangesElement;
